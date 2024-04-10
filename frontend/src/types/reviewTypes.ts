export interface Review {
    result: [{
        _id: string
        travelId: string
        stars: number
        comment: string
        email: string
    }]
}