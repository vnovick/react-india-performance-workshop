import {TPost} from '../components/UserPosts';
import {performExpensiveComputation} from './compute';

export const processPostData = (data: TPost) => {
  // Intensive calculation
  performExpensiveComputation();

  // Then, return the original data
  return {
    ...data,
    title: data.title.toUpperCase(), // Some trivial operation on data
  };
};
