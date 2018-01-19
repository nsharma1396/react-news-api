import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Container, Dimmer, Loader } from 'semantic-ui-react';
import  image  from './news-icon.png';
import  Footer  from './Footer';


class News extends Component {

	render() {
		const { data,status } = this.props;
		if(status==="loading")
			return (
					<Dimmer active>
						<Loader />
					</Dimmer>	
		)
		else if(status==="success"){
			return (
			  <div>
					<Container style={{padding:'20px'}}>
						<Card.Group>
			        {data.articles.map((elem,index)=> (
				        	<Card href={elem.url} key={index} color="red" centered raised>
				        		<Image bordered src={elem.urlToImage!=null?elem.urlToImage:image} />
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
	        <Footer />
		    </div>
			)
		}
		else
			return null;
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
