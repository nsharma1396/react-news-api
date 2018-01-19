import React, { Component } from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

class Footer extends Component {
	render () {
		return (
			<Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable centered>
              <Grid.Row textAlign="center">
              	<Grid.Column as="a" href="https://newsapi.org/" textAlign="center">
	              	<Header as="h1" color="blue">Powered By NewsAPI</Header>
	              </Grid.Column>
              </Grid.Row>
              	<Header as="h1" color="grey">Developed By&nbsp;&nbsp;Neeraj Sharma</Header>
              <Grid.Row textAlign="center">
            		<Grid.Column as="a" href="https://github.com/nsharma1396" textAlign="center">
	            		<Icon name='github square' size='huge'/>
	            	</Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
			)
	}
}


export default Footer;
