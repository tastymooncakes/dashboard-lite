"use client"

import { useSearchParams, useRouter } from 'next/navigation';

export const useViewRouter = () => {
    const router = useRouter();
    const SearchParams = useSearchParams();

    const view = SearchParams.get("view") || 'login';

    const updateView = (newView: string) => {
        router.push(`/?view=${newView}`)
    };

    return {
        view,
        updateView
    }
}