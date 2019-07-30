import * as userAction from './user';
import * as notificationActions from './notificationActions';
import {
  getAllArticles,
  fetchOneArticle,
  createPost,
  editPost,
  deleteArticle,
  publishArticle,
  unpublishArticle,
  getPublished
} from './articles';
import { createRate, clearCreateRateStore } from './rating';
import { uploadImage } from './images';
import searchArticles from './searchArticles';
import { getAllBookmarks, deleteOneBookmark } from './bookmarks';
import getArticleLikes from './getArticleLikes';
import likeArticle from './likeArticle';
import dislikeArticle from './dislikeArticle';

import {
  fetchComments,
  createComment,
  deleteComment,
  editComment,
  likeComment,
  getLikesComment,
  getCommentHistory
} from './comments';

export {
  userAction,
  notificationActions,
  getAllArticles,
  fetchOneArticle,
  createPost,
  editPost,
  deleteArticle,
  publishArticle,
  unpublishArticle,
  uploadImage,
  getPublished,
  createRate,
  clearCreateRateStore,
  searchArticles,
  getAllBookmarks,
  deleteOneBookmark,
  getArticleLikes,
  likeArticle,
  dislikeArticle,
  fetchComments,
  createComment,
  deleteComment,
  editComment,
  getCommentHistory,
  likeComment,
  getLikesComment
};
