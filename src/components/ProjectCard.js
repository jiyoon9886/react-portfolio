//A single `Project` component that will be used multiple times on a single page
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
		maxWidth: 345,
		margin: '10px',
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({title, alt, description, image, demo, repo, props}) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
				<CardActionArea a href={demo}>
          <CardMedia
            component='img'
            alt={alt}
            className={classes.media}
            image={image}
						title={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            <a href={repo}>GitHub</a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}