import { Component, signal } from '@angular/core';
import { CommentsFormComponent } from "../components/comments-form/comments-form.component";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentsFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  isExpanded = signal(false);
  isReplying = signal(false);

  toggleExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }
  toggleReplying() {
    this.isReplying.set(!this.isReplying());
    if (this.isReplying()) {
      this.isExpanded.set(true);
    }
  }
}
