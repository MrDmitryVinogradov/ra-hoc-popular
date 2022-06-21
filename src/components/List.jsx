import React from 'react';
import Video from './Video';
import Article from './Article';
import highliter from './highliter'

function List(props) {
  return props.list.map(item => {
    let LabeledComponent
    switch (item.type) {
      case 'video':
        LabeledComponent = highliter(item, Video);
      case 'article':
        LabeledComponent = highliter(item, Article);
    }
    return <LabeledComponent {...item} />
  });
};

export default List
