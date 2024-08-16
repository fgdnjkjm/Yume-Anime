'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()
  return (
    <div
      className={classes.card}

    >
      <Link
        href="/products"
        onClick={() => setCategoryFilters([category.id])}
        className={classes.imageLink}
        style={{
          width: '260px',
          height: '260px',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'block',

        }}
      >
        <img
          src={media.url}
          alt={category.title}
        />
      </Link>
      <p className={classes.title}>{category.title}</p>
    </div>
  )
}

export default CategoryCard
