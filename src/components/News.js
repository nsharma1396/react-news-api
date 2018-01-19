import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Container } from 'semantic-ui-react';

class News extends Component {

	render() {
		const { data,status } = this.props;
		if(status==="loading")
			return (
				<h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
					LOADING...
				</h1>	
		)
		else if(status==="success") {
			return (
			  <div>
					<Container style={{padding:'20px'}}>
						<Card.Group>
			        {data.articles.map((elem,index)=> (
				        	<Card href={elem.url} key={index} color="red" centered raised>
				        		<Image src={elem.urlToImage} />
				        		<Card.Content>
				        			<Card.Header>{elem.title}</Card.Header>
				        			<Card.Meta textAlign="right">{elem.author}</Card.Meta>
				        			<Card.Description>{elem.description}</Card.Description>
				        		</Card.Content>
				        		<Card.Content textAlign="right" extra>
				        			{elem.source.name}
				        			<br/>
				        			{elem.publishedAt}
				        		</Card.Content>
				        	</Card>
			        ))}
		        </Card.Group>
		      </Container>
		    </div>
			)
		}
		else
			return <h1>dasd</h1>;
	}

}

const mapStateToProps = (state) => {
  return {
  	data : state.data,
  	status : state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
