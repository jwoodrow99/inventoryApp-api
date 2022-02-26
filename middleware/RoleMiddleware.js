function role(allowedRoles) {
    return (req, res, next) => {
        if(allowedRoles.includes(req.user.roles[0])){
            next();
        } else {
            res.status(401).json({
                message: 'You do not have the role.'
            });
        }
    }
}

module.exports = role;