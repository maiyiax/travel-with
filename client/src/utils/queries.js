import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            vacations {
                _id
                name
                description
            }
        }
    }
`;

export const QUERY_VACATION = gql`
    query getVacations($_id: ID!) {
        vacations(_id: $_id) {
            _id
            name
            description
        }
    }
`;