import React from "react";

const KnowledgeBaseList = ({ title, items, rootClasses, ...props }) => (
  <section className={rootClasses}>
    <h2 className="text-4xl text-teal">Blog posts</h2>
    <ul className="mt-6 lg:list-disc list-inside leading-normal">
      {items.map(({ title, url }, idx) => (
        <li key={idx} className="mb-2 lg:mb-1">
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default KnowledgeBaseList;
