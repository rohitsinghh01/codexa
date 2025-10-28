import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { Client } from './client'
import { Suspense } from 'react';
export default async function Home() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.hello.queryOptions(
            /** input */
            { text: 'from Server Side' }
        ),
    );
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<p>Loading...</p>}>
                <Client />
            </Suspense>
        </HydrationBoundary>
    );
}