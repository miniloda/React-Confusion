import {React, Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


function DishDetail(props){
    function RenderDish({dish}){
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
    function RenderComments({comments}){
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
    return(
        props.dish!=null? <div className="container">

        <div className="row">
            <div className="col-md-5 m-1">
                <RenderDish dish = {props.dish}/>
            </div>
            <div className="col-md-5 m-1">

                    <RenderComments comments = {props.dish.comments}/>
            </div>
        </div>
        </div> :
        <div></div>
    )
    
}


export default DishDetail;