
export interface Education{
    id: any,
    university: any,
    graduation: any,
    major: any,
    minor:any,
    degree:any,
    portfolio: {
        id: any,
        belongsTo: any,
        status: any,
        myUser: {
            userId: any,
            email: any,
            password: any,
            firstName: any,
            lastName: any,
            admin: any
         }
    }
} 