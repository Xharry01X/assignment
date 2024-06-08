import React, { useState, useEffect, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function TitlebarImageList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);
  const observer = useRef();

  useEffect(() => {
    loadItems();

    // Initialize Intersection Observer
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && hasMore) {
      observer.current.observe(document.querySelector('#last-item'));
    }
  }, [isLoading, hasMore]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      loadItems();
    }
  };

  const loadItems = () => {
    setIsLoading(true);
    // Simulated data loading delay
    setTimeout(() => {
      const newItems = itemData.slice((currentPage - 1) * 5, currentPage * 5);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setCurrentPage((prevPage) => prevPage + 1);
      setIsLoading(false);
      if ((currentPage - 1) * 5 + newItems.length >= itemData.length) {
        setHasMore(false);
      }
    }, 1000); // Simulated delay of 1 second
  };

  return (
    <div className='image-view'>
      <ImageList sx={{ width: 500, height: 680 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {items.map((item, index) => (
          <ImageListItem key={item.img}>
            <Link to={`/image/${index}`}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </Link>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        <div id="last-item" style={{ height: 1, width: 1 }}></div>
      </ImageList>
      {isLoading && <p>Loading...</p>}
      {!hasMore && <p>No more items</p>}
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];