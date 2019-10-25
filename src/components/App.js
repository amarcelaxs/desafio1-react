import React, {Component} from 'react';

import Header from './header';
import Post from './post';

export default class App extends Component{
  state = {
    post: [
      {
        id:1,
        nome:'Diego Schell Fernandes',
        avatar:'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        tempo:'há 3 min',
        body:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Diuretics paradis num copo é motivis de denguis. Suco de cevadiss deixa as pessoas mais interessantis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! '
      },
      {
        id:2,
        nome:'Rubia Savolksi',
        avatar:'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        tempo:'há 30 min',
        body:'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Quem manda na minha terra sou euzis! '
      },
      {
        id:3,
        nome:'Rubia Savolksi',
        avatar:'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        tempo:'há 30 min',
        body:'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Quem manda na minha terra sou euzis! '
      },
    ],
  };

  render(){
    const {post} = this.state;
    return (
      <div className="post-container">
        <Header />
        <div>
          {post && post.map( post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}