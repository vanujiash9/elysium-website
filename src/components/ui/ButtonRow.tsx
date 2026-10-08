import { Arrow } from "./Arrow"
import { PageLink } from "./PageLink"

export function ButtonRow() {
  return (
    <div className="button-row">
      <PageLink className="button button--primary" to="/lien-he">
        Nhận tư vấn miễn phí <Arrow />
      </PageLink>
      <PageLink className="button button--ghost" to="/san-pham">
        Xem sản phẩm demo
      </PageLink>
    </div>
  )
}
