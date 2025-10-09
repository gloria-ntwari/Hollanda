import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, X } from "lucide-react";
import { format } from "date-fns";

import { SanityBlock } from "@/sanity/client";

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    post: {
        title: string;
        description?: string;
        body?: SanityBlock[];
        date: string;
        image: string;
    } | null;
}

const BlogModal = ({ isOpen, onClose, post }: BlogModalProps) => {
    if (!post) return null;

    // Simple function to render body content
    const renderBodyContent = (body: SanityBlock[]) => {
        if (!body || body.length === 0) return null;

        return body.map((block, index) => {
            if (block._type === 'block' && block.children) {
                return (
                    <p key={index} className="mb-4 leading-relaxed">
                        {block.children?.map((child, childIndex: number) => (
                            <span key={childIndex}>{child?.text}</span>
                        ))}
                    </p>
                );
            }
            return null;
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
                <DialogHeader className="flex-shrink-0">
                    <DialogTitle className="text-2xl font-bold pr-8">
                        {post.title}
                    </DialogTitle>
                </DialogHeader>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                    </div>

                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Description (Short Summary) */}
                    {post.description && (
                        <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-l-4 border-orange-500">
                            <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Summary</h3>
                            <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                                {post.description}
                            </p>
                        </div>
                    )}

                    {/* Body Content (Full Article) */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Full Article</h3>
                        <div className="text-foreground leading-relaxed space-y-4">
                            {post.body && post.body.length > 0 ? (
                                renderBodyContent(post.body)
                            ) : (
                                <p className="text-muted-foreground italic">
                                    Full content will be available once added in the CMS.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Spacer for better scrolling */}
                    <div className="h-4"></div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BlogModal;