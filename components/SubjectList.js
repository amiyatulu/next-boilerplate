import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_SUBJECTS_LIST = gql`

query getSucjectsList($group_name: String!){
    allSubjectList(group_Name: $group_name) {
      edges {
        node {
          id
          name
          
        }
      }
    }
  }


`;

class SubjectList extends Component {
    state = {  }
    render() { 
        const {name : group_name} = this.props
        return( <Query query={GET_SUBJECTS_LIST} variables={{group_name}}>
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return ( <React.Fragment>
                <h1>{group_name}</h1>
                {data.allSubjectList.edges.map(subject => <p key={subject.node.id}>{subject.node.name}</p> )}
            </React.Fragment> );
        }}
        </Query>)
        
        
    }
}
 
export default SubjectList;