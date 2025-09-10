exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).select('username email')

        if (!user) {
            return res.status(404).json({
                statusCode: false,
                statusText: "Not found",
                message: "No user found"
            });
        };

        res.status(200).json({
            statusCode: true,
            statusText: "Ok",
            message: "user found",
            data: user
        });
    } catch (error) {
       res.status(500).json({
        statusCode: false,
        statusText: "Internal Server Error",
        message: "Error getting user" + error.message
       });
    }
    
};

exports.getAll = async (req, res) => {
    try {
        const users = await userModel.find();

        if (users.lenght === 0) {
            return res.status(404).json({
                statusCode: false,
                statusText: "Not found",
                message: "No users found",
            });
        };

        res.status(200).json({
            statusCode: true,
            statusText: "Ok",
            message: "All users found",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            statusCode: false,
            statusText: "Internal Server Error",
            message: "Error getting user",
            error: error.message,
        });
    }
};