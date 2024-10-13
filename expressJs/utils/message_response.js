module.exports = class MessageResponse{

    success(response){
        response.status(200).json({
            message:'success'
        })
    }

    success_details(response,details){
        response.status(200).json({
            message:'success',
            details:details
        })
    }

    bad_request(response){
        response.status(400).json({
            message:'bad request'
        })
    }

    not_found(response){
        response.status(404).json({
            message:'not found'
        })
    }

    error_details(response,error){
        response.status(400).json({
            message:'bad request',
            details:error
        })
    }
}