import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostService} from '../post.service';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts=[];
  error;  
  constructor(private postService:PostService) {}
  ngOnInit(): void {

    this.postService.getPosts()
    .subscribe(response=>{
      this.posts=<[]>response
    },error=>this.error=error);
  }
   
   createPost(input:HTMLInputElement){
        const post={title:input.value};
        input.value='';
        this.postService.createPost(post)
          .subscribe(response=>{
              post['id']=response['id'];
              this.posts.splice(0,0,post);
            })
   }
   
   deletePost(post){
     this.postService.deletePost(post)
         .subscribe(response=>{
           console.log(response)
           let index=this.posts.indexOf(post);
           this.posts.splice(index,1);
          })
   }
}
