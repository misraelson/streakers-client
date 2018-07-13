import React from 'react';
import { observer } from 'mobx-react';

import Activity from './Activity';

@inject(['activites'])
@observer class Layout extends React.Component {
  addActivity = (e) => {
    e.preventDefault();

    const activities = this.props.activities.all.slice();
    const newId = activities[activities.length - 1].id + 1;

    this.props.activities.add({
      id: newId,
      title: this.refs.title.value,
      user_id: this.refs.user_id.value,
    });
    this.refs.title.value = null;
    this.refs.user_id.value = null;
  };

  newActivity = () =>
    <div>
      <form onSubmit={this.addActivity}>
        <input ref='title' type='title' placeholder='Floss' />
        <input ref='user_id' type='text' placeholder='User Id'/>

        <button type="submit" className='button'>Add</button>
      </form>
    </div>

  render() {
    return (
      <div id='Activities' className='Activity'>
        {this.newActivity()}
        <div>
          {this.props.contacts.all.slice().map(info =>
            <Activities key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
