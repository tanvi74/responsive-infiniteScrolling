
import { useEffect, useCallback } from 'react';

export default function useInfiniteScroll(scrollRef, dispatch){
    const scrollObserver = useCallback(
      node => {
        new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.intersectionRatio > 0) {
              dispatch({ type: 'ADVANCE_PAGE' });
            }
          });
        }).observe(node);
      },
      [dispatch]
    );
  
    useEffect(() => {
      if (scrollRef.current) {
        scrollObserver(scrollRef.current);
      }
    }, [scrollObserver, scrollRef]);
  }