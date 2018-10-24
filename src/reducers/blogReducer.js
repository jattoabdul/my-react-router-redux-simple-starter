import {
  GET_BLOG_POSTS,
  GET_BLOG_POSTS_SUCCESS,
  GET_BLOG_POSTS_FAIL,
  GET_BLOG_POST,
  GET_BLOG_POST_SUCCESS,
  GET_BLOG_POST_FAIL,
  DELETE_BLOG,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  ADD_BLOG,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_FAIL,
  UPDATE_BLOG,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL  } from '../constants';
  
  const initialState = {
    blogPosts: [],
    blogPostPaginationData: {},
    isFetchingBlogPosts: false,
    errorfetchingBlogPosts: '',
    blogPost: {},
    isFetchingBlogPost: false,
    errorfetchingBlogPost: '',
    isDeletingPost: false,
    errorDeletingPost: '',
    isAddingPost: false,
    errorAddingPost: ''
  };
  
  const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;
      switch (type) {
        case GET_BLOG_POSTS:
          return {
            ...state,
            isFetchingBlogPosts: true,
            errorfetchingBlogPosts: ''
          }
        case GET_BLOG_POSTS_SUCCESS:
          return {
            ...state,
            blogPosts: payload.posts,
            blogPostPaginationData: payload.pagination,
            isFetchingBlogPosts: false
          }
        case GET_BLOG_POSTS_FAIL:
          return {
            ...state,
            blogPosts: [],
            blogPostPaginationData: {},
            errorfetchingBlogPosts: payload.response.statusText,
            isFetchingBlogPosts: false
          }
        case GET_BLOG_POST:
          return {
            ...state,
            isFetchingBlogPost: true,
            errorfetchingBlogPost: ''
          }
        case GET_BLOG_POST_SUCCESS:
          return {
            ...state,
            blogPost: payload.post,
            isFetchingBlogPost: false
          }
        case GET_BLOG_POST_FAIL:
          return {
            ...state,
            blogPost: {},
            errorfetchingBlogPost: payload.response.statusText,
            isFetchingBlogPost: false
          }
        case DELETE_BLOG:
          return {
            ...state,
            isDeletingPost: true,
            errorDeletingPost: ''
          }
        case DELETE_BLOG_SUCCESS:
          const posts = state.blogPosts
          .filter(post => post.id !== payload);
          return {
            ...state,
            blogPosts: [...posts],
            isDeletingPost: false
          }
        case DELETE_BLOG_FAIL:
          return {
            ...state,
            errorDeletingPost: payload.response,
            isDeletingPost: false
          }
        case ADD_BLOG:
          return {
            ...state,
            isAddingPost: true,
            errorAddingPost: ''
          }
        case ADD_BLOG_SUCCESS:
          return {
            ...state,
            blogPosts: [payload.newPost, ...state.blogPosts],
            isAddingPost: false
          }
        case ADD_BLOG_FAIL:
          return {
            ...state,
            errorAddingPost: payload.response,
            isAddingPost: false
          }
        default:
          return state
      }
     }

  export default blogReducer;
