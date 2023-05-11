// Reactをインポート
import React from 'react';

// Lessonクラスを定義
class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;

    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
        <div className='modal-inner'>
          <div className='modal-header'></div>
          <div className='modal-introduction'>
            {/* レッスン名表示 */}
            <h2>{this.props.name}</h2>
            {/* レッスン紹介文 */}
            <p>{this.props.introduction}</p>
          </div>
          <button
            className='modal-close-btn'
            onClick={() => {this.handleClickClose()}}
          >
            とじる
          </button>
        </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div className='lesson-item'
          key={this.props.id}
          onClick={() => {this.handleClickLesson()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {/* 変数モーダルを表示してください */}
        {modal}
      </div>
    );
  }
}

// Lessonクラスをexport
export default Lesson;
