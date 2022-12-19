import { Sequelize } from 'sequelize-typescript';

import { User } from './models/User';
import { Post } from './models/Post';

export default new Sequelize({
  dialect: 'mysql',
  models: [User, Post],
});
