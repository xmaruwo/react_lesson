// Reactをインポート
import React from 'react';
// Lessonコンポーネントをインポート
import Lesson from './Lesson';
import ContactForm from './ContactForm';

// Mainクラス定義
class Main extends React.Component {
  render() {
    const lessonList = [
      {
        id: 1,
        name: 'HTML & CSS',
        image: './images/html_css.png',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
        id: 2,
        name: 'JavaScript',
        image: './images/javascript.png',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
      {
        id: 3,
        name: 'Sass',
        image: './images/sass.png',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
      {
        id: 4,
        name: 'SQL',
        image: './images/sql.png',
        introduction: 'SQLはデータの管理や分析を行うデータベース言語です。',
      },
      {
        id: 5,
        name: 'Ruby',
        image: './images/ruby.png',
        introduction: 'RubyはWEBアプリケーションの「システム」をつくるためのプログラミング言語です。',
      },
      {
        id: 6,
        name: 'JavaScript(ES5)',
        image: './images/javascript.png',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
      {
        id: 7,
        name: 'jQuery',
        image: './images/jquery.png',
        introduction: 'jQueryを使うとWEBページにアニメーションや効果を簡単につけることができます。',
      },
      {
        id: 8,
        name: 'Git',
        image: './images/git.png',
        introduction: 'Webサイトやアプリなどを作る際に、複数人で協力しながら開発していくことがあります。 Gitを使うことでそのような共同開発をスムーズに進めることができます。',
      },
      {
        id: 9,
        name: 'Command Line',
        image: './images/command_line.png',
        introduction: 'コマンドラインはコンピュータを操作するツールであり、webサイトやアプリを作る上で必須のものです。',
      },
      {
        id: 10,
        name: 'PHP',
        image: './images/php.png',
        introduction: 'PHPを学べば、ユーザーからデータを受け取りそれを表示するなど、 実際のWEBサービスで必要な機能を作ることが出来ます。',
      },
      {
        id: 11,
        name: 'Ruby on Rails5',
        image: './images/ruby_on_rails.png',
        introduction: 'Ruby on Railsは、Rubyで書かれた、WEBサービスの開発に必須のフレームワークです。',
      },
      {
        id: 12,
        name: 'Python',
        image: './images/python.png',
        introduction: '「Python」はWebアプリケーション開発や機械学習、統計処理など、様々な分野で使われています。',
      },
      {
        id: 13,
        name: 'Node.js',
        image: './images/nodejs.png',
        introduction: 'Node.js はスケーラブルなネットワークアプリケーションを構築するために設計された非同期型のイベント駆動の JavaScript 環境です。 ',
      },
      {
        id: 14,
        name: 'React',
        image: './images/react.png',
        introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
      },
      {
        id: 15,
        name: 'Go',
        image: './images/go.png',
        introduction: '「Go」はスタートアップから大規模なシステム開発まで、さまざまな開発現場で使われるサーバーサイド言語です。',
      },
      {
        id: 16,
        name: 'Java',
        image: './images/java.png',
        introduction: 'Java は大規模開発からモバイルアプリまで、 汎用的なプログラミング言語です。',
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>progateサイトを使って学習した技術</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>修了したレッスン</h3>
            {/* Lessonコンポーネントを表示し、propsを渡す */}
            {lessonList.map((lessonItem, index) => {
              return (
                <Lesson
                  key={lessonItem.id}
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
          <div className='contact-container'>
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
