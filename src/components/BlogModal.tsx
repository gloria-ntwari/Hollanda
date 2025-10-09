import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, X } from "lucide-react";
import { format } from "date-fns";

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    post: {
        title: string;
        description?: string;
        date: string;
        image: string;
    } | null;
}

const BlogModal = ({ isOpen, onClose, post }: BlogModalProps) => {
    if (!post) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold pr-8">
                        {post.title}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
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

                    {/* Description */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                            {post.description || "No description available."}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BlogModal;