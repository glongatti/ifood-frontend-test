import React from 'react';
import { Col, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';
import { removeHtmlTagsFromDescription } from '../../app/utils/string';
import './FeaturedPlaylists.less';

const FeaturedPlaylists = () => {
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));

  return (
    <>
      {featuredPlaylists && featuredPlaylists.playlists && featuredPlaylists.playlists.items.map((item) => (
        <Col
          className="playlist"
          key={item.id}
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <div
            className="playlist__item"
            style={{
              backgroundImage: `url(${item.images[0].url})`,
            }}
          >
            <div className="playlist__item__info">
              <p>{removeHtmlTagsFromDescription(item.description)}</p>
            </div>
          </div>
        </Col>
      ))}

      {!featuredPlaylists && loading !== 0 && (
      <Col
        span={24}
        className="home__loading"
      >
        <Spin indicator={(
          <LoadingOutlined
            style={{ fontSize: 50 }}
            className="home__loading__spin"
            spin
          />
          )}
        />
      </Col>
      )}
    </>
  );
};

export default FeaturedPlaylists;
