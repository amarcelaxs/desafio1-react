import React, { Component } from 'react';



import Header from './Header';

import Post from './Post';



export default class App extends Component {

  state = {

    posts: [

      {

        id: 1,

        name: 'Diego Fernandes',

        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',

        time: 'há 3 min',

        body:

          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',

      },

      {

        id: 2,

        name: 'Rocketseat',

        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',

        time: 'há 30 min',

        body:

          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',

      },
      {

        id: 2,

        name: 'Rocketseat',

        avatar: 'https://avatars3.githubusercontent.com/u/11263400?s=400&u=cd6884c5242ff1552edff6a01ba753f9f32d5bb7&v=4,',

        time: 'há 30 min',

        body:

          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',

      },


    ],

  };



  render() {

    const { posts } = this.state;

    return (

      <div>

        <Header />

        <div className="post-container">

          {posts && posts.map(post => <Post key={post.id} data={post} />)}

        </div>

      </div>

    );

  }

}