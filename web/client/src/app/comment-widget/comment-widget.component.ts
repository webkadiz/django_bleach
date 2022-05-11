import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService, Comment } from '../comment.service';

@Component({
  selector: 'app-comment-widget',
  templateUrl: './comment-widget.component.html',
  styleUrls: ['./comment-widget.component.scss'],
})
export class CommentWidgetComponent implements OnInit {
  @Input() seasonId: number | null = null;
  @Input() serieId: number | null = null;
  @Input() filmId: number | null = null;

  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  comments: Comment[] = [];

  editableComment: number = 0;
  newCommentName = new FormControl('')

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService
      .getComments(this.commentIdTypes())
      .subscribe((comments) => {
        this.comments = comments;
      });
  }

  commentIdTypes() {
    return {
      seasonId: this.seasonId,
      filmId: this.filmId,
      serieId: this.serieId,
    };
  }

  getWidgetTitle() {
    if (this.seasonId) return 'Комментарии к сезону';
    if (this.serieId) return 'Комментарии к серии';
    if (this.filmId) return 'Комментарии к фильму';

    return '';
  }

  validInputClass(controlName: 'name' | 'content') {
    if (this.commentForm.get(controlName)?.pristine) return '';

    if (this.commentForm.get(controlName)?.errors) return 'is-invalid';
    else return 'is-valid';
  }

  validFeedbackClass(controlName: string) {
    if (this.commentForm.get(controlName)?.pristine) return 'd-none';

    if (this.commentForm.get(controlName)?.errors) return 'invalid-feedback';
    else return 'd-none';
  }

  onSubmit() {
    if (this.commentForm.status === 'INVALID') return;

    this.commentService
      .sendComment({
        ...this.commentForm.value,
        seasonId: this.seasonId,
        serieId: this.serieId,
        filmId: this.filmId,
      })
      .subscribe(() => {
        this.commentService
          .getComments(this.commentIdTypes())
          .subscribe((comments) => {
            this.comments = comments;
          });
      });
  }

  editComment(comment: Comment) {
    this.editableComment = comment.id
    this.newCommentName.setValue(comment.name)
  }

  saveComment(comment: Comment) {
    this.commentService.editComment({
        id: comment.id,
        name: comment.name,
        content: comment.content,
        seasonId: this.seasonId,
        serieId: this.serieId,
        filmId: this.filmId,
    }).subscribe(res => res)
    comment.name = this.newCommentName.value
    this.editableComment = 0
  }
}
