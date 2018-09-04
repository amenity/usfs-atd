import Introduction from '../components/Introduction.jsx';
import { phoneConfig } from 'us-forms-system/lib/js/definitions/phone';

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
          path: 'contact/contact',
          title: 'Contact Information',
          schema: {
            type: 'object',
            properties: {
              'view:textObject': {
                type: 'object',
                properties: {}
              },
              firstName: {
                type: 'string'
              },
              lastName: {
                type: 'string'
              },
              email: {
                type: 'string',
                format: 'email'
              },
              // TODO: Figure out why the phone definition is breaking stuff; see https://github.com/usds/us-forms-system/blob/44bf861a0fe641f7d566c70cffb5d3ffd44ba9af/docs/building-a-form/common-definitions.md#phone
              //phone: phoneConfig.schema(), 
              phone: {
                type: 'string',
                minLength: '10'
              },
              street: {
                type: 'string'
              },
              city: {
                type: 'string'
              },
              state: {
                type: 'string',
                enum: ['AK', 'IL', 'MA', 'TX', 'WY']
              },
              zip: {
                type: 'string',
                pattern: '^[0-9]{5}$'
              }
            }
          },
          uiSchema: {
            'view:textObject': {
              'ui:description': 'Tell us how to contact you.'
            },
            firstName: {
              'ui:title': 'First name'
            },
            lastName: {
              'ui:title': 'Last name'
            },
            email: {
              'ui:title': 'Email address'
            },
           // phone: phoneConfig.uiSchema('Phone number'),
            phone: {
              'ui:title': 'Phone number',
              'ui:description': 'Enter a 10 digit phone number',
              'ui:errorMessages': {
                'minLength': 'Please enter a valid 10 digit phone number'
              }
            },
            street: {
              'ui:title': 'Street'
            },
            city: {
              'ui:title': 'City'
            },
            state: {
              'ui:title': 'State',
              'ui:options': {
                labels: {
                  AK: 'Alaska',
                  IL: 'Illinois',
                  MA: 'Massachusetts',
                  TX: 'Texas',
                  WY: 'Wyoming'
                }
              }
            },
            zip: {
              'ui:title': 'ZIP code',
              'ui:errorMessages': {
                'pattern': 'Please enter a valid 5 digit US ZIP code.'
              }
            }
          },
        },
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
