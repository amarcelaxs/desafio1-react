import React from 'react';
import PropTypes from 'prop-types';

import postHeader from './postHeader';

const Post = ({ data}) => (
  <div className="post" >
    <postHeader avatar={data.avatar} name={data.name} time={data.time} />
    <p>{data.body}</p>
  </div>
);


Post.propTypes ={
  data:PropTypes.shape({
    id:PropTypes.number.inRequired,
    nome:PropTypes.string.inRequired,
    avatar:PropTypes.number.inRequired,
    time:PropTypes.number.inRequired,
    body:PropTypes.number.inRequired,
  }).isRequired,
};


export default Post;