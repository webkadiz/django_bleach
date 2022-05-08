import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Comment {
  name: string;
  content: string;
  seasonId: number | null;
  serieId: number | null;
  filmId: number | null;
}

export interface CommentIdTypes {
  seasonId: number | null;
  serieId: number | null;
  filmId: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(commentIdTypes: CommentIdTypes) {
    return this.http.post<Comment[]>('http://localhost:8000/api/comment/list', commentIdTypes)
  }

  sendComment(comment: Comment) {
    return this.http.post('http://localhost:8000/api/comment/create', comment)
  }
}
