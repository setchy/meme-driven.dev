import type { components } from '@octokit/openapi-types';

export interface RepoStats {
  stars: string;
}

export interface IconDetails {
  name: string;
  link: string;
  svg: string;
}

export interface BestPractice {
  title: string;
  meme: string;
  ext: 'jpg' | 'png' | 'svg';
  caption: string;
}

// GitHub API types
export type ReleaseAsset = components['schemas']['release-asset'];
