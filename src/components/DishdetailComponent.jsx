import {React, Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg top src = {dish.image} alt = {dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                            <CardText>
                            {dish.description}
                            </CardText>
                    </CardBody>
                </Card>
            )
        }
    }
    renderComments(comments){
        console.log(comments)
        if (comments != null){
            return(
                <div className="col-12">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <>
                                <li key={comment.id}>
                                    {comment.comment}
                                </li>
                                <li key={comment.id}>
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </li>
                                </>
                            )
                        }
                        )}
                    </ul>
                </div>
            )
        }else{
            return;
        }    }
    render(){
    if(this.props.dish != null){
        return(
            <div className="row">
                <div className="col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-md-5 m-1">

                        {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )

    }
}
}

export default DishDetail;