import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage'; // The import gets the raw component, used for testing
// In the prod code, the import should be done, as below, to get the connected component
//import ManageCoursePage from './ManageCoursePage';

describe ('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }}, // This is a mock
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

	const wrapper = mount(<ManageCoursePage {...props}/>);
	const saveButton = wrapper.find('input').last();
	expect(saveButton.prop('type')).toBe('submit');
	saveButton.simulate('click');
	expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
