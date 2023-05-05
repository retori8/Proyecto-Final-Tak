import React from "react";
import { CardTestimonials } from "./cardTestimonials";

export const Testimonials = () => {
    return (
        <div className="m-5">
            <div className="m-5">
                <h1>Lo que piensan de Tak</h1>
            </div>
            <br/>
            <div className="container text-center">
                <div className="row grid gap-0 column-gap-3">
                    <CardTestimonials img={"https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"} name="John Doe" testimonio="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
                    <CardTestimonials img={"https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"} name="John Doe" testimonio="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
                    <CardTestimonials img={"https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"} name="John Doe" testimonio="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
                    <CardTestimonials img={"https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"} name="John Doe" testimonio="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
                </div>
            </div>
        </div>
    );
};