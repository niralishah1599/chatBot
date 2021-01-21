export class IQuestions {
    options: IOptions[];
    message: string;
    sender: string;
    date: Date;
    id?: number;
    AffiliateType?: number[];
    isLastQuestion?: boolean;
    IndustryId?: number[];
}
export class IOptions {
    option: string;
    optionId: string;
    PortalUpdate: number;
    AltGoalId: string;
}