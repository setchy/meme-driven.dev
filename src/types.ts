import type { components } from '@octokit/openapi-types';

export interface RepoStats {
  forks: string;
  stars: string;
}

export interface IconDetails {
  name: string;
  link: string;
  svg: string;
}

// GitHub API types
export type ReleaseAsset = components['schemas']['release-asset'];
