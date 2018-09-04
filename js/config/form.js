import Introduction from '../components/Introduction.jsx';

const formConfig = {
  title: 'Apply for a Residential Parking Permit',
  //subTitle: 'This is a test.',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'Contact Information',
      pages: {
        firstPage: {
          path: 'contact/first-page',
          title: 'First Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        },
        secondPage: {
          path: 'first-chapter/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    secondChapter: {
      title: 'Second Chapter',
      pages: {

      }
    }
  }
};

export default formConfig;
