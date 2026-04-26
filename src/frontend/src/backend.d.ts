import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface GlobalInitiative {
    status: string;
    title: string;
    description: string;
}
export interface FocusArea {
    title: string;
    icon: string;
    description: string;
}
export interface EngagementRequest {
    name: string;
    role: string;
    sector: string;
    email: string;
    message: string;
}
export interface CommunitySegment {
    title: string;
    description: string;
}
export interface Testimonial {
    role: string;
    quote: string;
    author: string;
    organization: string;
}
export interface backendInterface {
    getAllEngagementRequests(): Promise<Array<EngagementRequest>>;
    getCommunitySegments(): Promise<Array<CommunitySegment>>;
    getFocusAreas(): Promise<Array<FocusArea>>;
    getGlobalInitiatives(): Promise<Array<GlobalInitiative>>;
    getProfileInfo(): Promise<{
        bio: string;
        titles: string;
        visionStatement: string;
        name: string;
        credentials: string;
    }>;
    getTestimonials(): Promise<Array<Testimonial>>;
    submitEngagementRequest(name: string, email: string, role: string, sector: string, message: string): Promise<boolean>;
}
