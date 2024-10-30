import { useState } from "react";
import { useProjects } from "../services/queries";


export default function Projects() {
const [page, setPage] = useState(1);

const {  data: projectsData, isPending, error, isError, isPlaceholderData, isFetching} = useProjects(page)

    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message} </div>
            ) : (
                <div>
                    {data.projectsData.map((project) => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}

            <span>Current page: {page} </span>
            <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
                Previous page
            </button>

            <button onClick={() => {
                if (!isPlaceholderData && page < projectsData.totalPages) {
                    setPage((old) => old + 1)
                }
            }} disabled={page >= projectsData.totalPages || isPlaceholderData}>
                Next page
            </button>
            {isFetching ? <span>Loading...</span> : null}
        </div>
    )
}