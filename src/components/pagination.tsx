
'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationComponent({ currentPage, totalPages }: PaginationComponentProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPaginationItems = () => {
    const pages = [];
    // Always show first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if current page is far from the start
    if (currentPage > 3) {
      pages.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
    }

    // Show pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Show ellipsis if current page is far from the end
    if (currentPage < totalPages - 2) {
       pages.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
        pages.push(
            <PaginationItem key={totalPages}>
              <PaginationLink href={createPageURL(totalPages)} isActive={currentPage === totalPages}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
        );
    }


    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)} className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined} />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} className={currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
