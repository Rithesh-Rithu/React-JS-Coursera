import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

export default class DishdetailComponent extends Component {
    renderDish(dish){
        if(dish != null){
            return(
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle> 
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
               );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderComments(comments){
        if(comments == null){
            return (
                <div></div>
            );
        }
        else{
            const cmnts = comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </div>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
        }
    
    }
    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        else{
        const dishItem = this.renderDish(dish);
        const commentItem = this.renderComments(dish.comments);
        return (
            <div className="container">
            <div className="row">
             {dishItem}
             {commentItem}
            </div>
            </div>
        );
        }
    }
}
