import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SubjectList from './SubjectList';

const ALL_SUBJECTGROUP_QUERY = gql`

query{
    allSubjectGroup {
      edges {
        node {
          id
          name
  
        }
      }
    }
    
  }
`;


class SubjectGroup extends Component {
    state = {  }
    render() { 
        return ( <Query query={ALL_SUBJECTGROUP_QUERY}>
        {({loading, error, data}) =>{
            if (loading) return (<div>Loading...</div>);
            if (error) return (<div>`Error! ${error.message}`</div>);
            // console.log(data)
            return (
                <React.Fragment>
                    {data.allSubjectGroup.edges.map(group => <SubjectList key={group.node.id} name={group.node.name} />)}
                </React.Fragment>
                
            )
        }}
        
        </Query>  );
    }
}
 
export default SubjectGroup;



