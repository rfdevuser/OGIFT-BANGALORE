// // mutations.js

 import { gql } from '@apollo/client';

// export const ADD_ADMISSION_MUTATION = gql`
// mutation MyMutation($input: formData!)  {
 
//   addadmissionmutation(
//     input: {
//       firstName: "John",
//       lastName: "Doe",
//       phoneNumber: "1234567890",
//       email: "john.doe@example.com",
//       courseInterest: "Computer Science",
//       startDate: "2024-06-01",
//       state: "California",
//       currentStatus: "Pending"
//     }
//   ) {
//     testoutput
//   }
// }

// `;
// mutations.js
export const ADD_ADMISSION_MUTATION = gql`
  mutation AddAdmission(
    $firstName: String!,
    $lastName: String!,
    $phoneNumber: String!,
    $email: String!,
    $courseInterest: String!,
    $startDate: String!,
    $state: String!,
    $currentStatus: String!
  ) {
    addadmissionmutation(
      input: {
        firstName: $firstName,
        lastName: $lastName,
        phoneNumber: $phoneNumber,
        email: $email,
        courseInterest: $courseInterest,
        startDate: $startDate,
        state: $state,
        currentStatus: $currentStatus
      }
    ) {
      testoutput
    }
  }
`;


export const ADD_STUDENT_CONTACT_MUTATION = gql`
  mutation AddStudentContact(
    $name: String!,
    $email: String!,
    $contact: String!
  ) {
    addstudentcontactmutation(input: {
      name: $name,
      email: $email,
      contact: $contact
    }) {
      testoutput
    }
  }
`;
