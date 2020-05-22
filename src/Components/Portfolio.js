import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Icon,
  Paper,
} from '@material-ui/core';

import { GitHub, Launch } from '@material-ui/icons';

const list = [
  {
    name: 'Personal website',
    demoLink: 'https://mitchell.schooler.me',
    sourceLink: 'https://github.com/mitwilsch/mitchell.schooler.me',
    desc: 'My personal website',
  },
  {
    name: 'Schooler.me',
    demoLink: 'https://schooler.me',
    sourceLink: 'https://github.com/mitwilsch/schooler.me',
    desc: 'Schooler family website, interactive family tree browser',
  },
  {
    name: 'Stat Monitor',
    demoLink: 'https://mitwilsch.dev',
    sourceLink: 'https://github.com/mitwilsch/stat-monitor',
    desc:
      "Displays useful stats on the server it's run on. Demo is running on the same server hosting this!",
  },
  {
    name: 'Host Router',
    sourceLink: 'https://github.com/mitwilsch/host-router',
    desc:
      'Server framework for hosting multiple React and Express apps fromthe same server, containerized for portability',
  },
];

const Portfolio = props => {
  return (
    <div style={{ width: 'auto' }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Portfolio
      </Typography>

      <div>
        {list.map(item => (
          <Card elevation={5}>
            <CardContent>
              <Typography variant="h4">{item.name}</Typography>

              <Typography variant="body1" gutterBottom>
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions>
              {item.demoLink ? (
                <Button
                  variant="outlined"
                  color="primary"
                  href={item.demoLink}
                  startIcon={<Launch />}
                >
                  Link
                </Button>
              ) : null}

              <Button
                variant="contained"
                color="primary"
                href={item.sourceLink}
                startIcon={<GitHub />}
              >
                Source
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
