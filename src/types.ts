import type { ReactNode } from 'react';

export interface Accordiontype {
    level: string;
    description: string;
    topics: ReactNode[];
}

export interface Topictype {
    title: string;
    description: string;
    urls: string[];
}